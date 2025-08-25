import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <p className="font-semibold">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="mt-2">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-1">
                {msg.createdAt?.toDate().toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AdminMessages;
