//import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";


//steles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
 // const url = "http://localhost:3000/recipes/" + id;
 // const { data, isPending, error } = useFetch(url);
 const [data, setData] = useState(null);
 const [isPending, setIsPending] = useState(false);
 const [error, setError] = useState(null);


  const { mode } = useTheme();

  //console.log("id", id);

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      //console.log(doc)
      if (doc.exists) {
        setIsPending(false);
        setData(doc.data())
      }
      else {
        setIsPending(false);
        setError("Could not find recipe.")
      }
    })

    if (error) {
      //redirect user
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate, id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {data && (
        <>
            <h2 className="page-title">{data.title}</h2>
            <p> Takes {data.cookingTime} to cook.</p>
            <ul>
                {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
