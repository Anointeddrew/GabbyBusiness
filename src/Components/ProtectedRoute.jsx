
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function ProtectedRoute({ children, adminOnly }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          if (adminOnly) {
            setAuthorized(data.role === "admin"); 
          } else {
            setAuthorized(true);
          }
        } else {
          setAuthorized(false);
        }
      } else {
        setAuthorized(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [adminOnly]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return authorized ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
