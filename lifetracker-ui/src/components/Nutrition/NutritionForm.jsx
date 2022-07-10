import * as React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../services/apiClient"
import "./NutritionFrom.css" 

export default function NutritionForm(){
    const [form, setForm] = useState({
        name: "",
        calories: 1,
        imageUrl: "",
        category: "",
        quantity: 1
    })

    const [errors, setError] = useState(null)
    // const [post, setPost] = useState(false)
    const navigate = useNavigate()


    // useEffect(()=>{
    //     if(post){
    //         navigate("/nutrition")
    //     }
    // }, [post, navigate])

    const handleOnSubmit = async () => {
        setError((e) => ({ ...e, form: null }));
        if (form.name === "") {
            setError((e) => ({ ...e, form: "Invalid name" }));
            return;
          } else {
            setError((e) => ({ ...e, form: null }));
        }
        
        if (form.category === "") {
            setError((e) => ({ ...e, form: "Invalid category" }));
            console.log(errors.body)
            return;
          } else {
            setError((e) => ({ ...e, form: null }));
        }

        if (form.imageUrl === "") {
            setError((e) => ({ ...e, form: "Invalid image URL" }));
            console.log(errors.body)
            return;
          } else {
            setError((e) => ({ ...e, form: null }));
        }
        
    
        const { data, error } = await API.createNutrition({
          name: form.name,
          category: form.category,
          quantity: Number(form.quantity),
          calories: Number(form.calories),
          imageUrl: form.imageUrl,
        });
        if (error) setError((e) => ({ ...e, form: error }));
        if (data) {
          navigate("/nutrition");
        }
    };

        const handleOnInputChange = (event) => {
            setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
          }
    


    return(
        <div className="NutritonName">
            <h2>Record Nutrition</h2>
            <div className="form">
                <div className="InputField">
                    <label for name="name">Name</label>
                    <input type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}></input>
                </div>
                <div className="InputField">
                    <label for= "category">Category</label>
                    <input type="text" name="category" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange}></input>
                </div>
                <div className="split-input-field">
                    <div className="InputField">
                        <label for= "quantity">Quantity</label>
                        <input type="number" name="quantity" min="1" max="100000000" value={form.quantity} onChange={handleOnInputChange}></input>
                    </div>
                    <div className="InputField">
                        <label for= "calories">Calories</label>
                        <input type="number" name="calories" min="0" max="10000000000" step="10" value={form.calories} onChange={handleOnInputChange}></input>
                    </div>
                </div>
                <div className="InputField">
                        <label for= "imageUrl">Image URL</label>
                        <input type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value={form.imageUrl} onChange={handleOnInputChange}></input>
                    </div>
                    <button className="Button primary large  aqua"  onClick={handleOnSubmit} >Save</button>
            </div>
        </div>
    )
}
