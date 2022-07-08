import * as React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../services/apiClient"
import "./NutritionFrom.css" 

export default function NutritionForm(){
    const [form, setForm] = useState({


    })

    const [error, setError] = useState(null)
    const [post, setPost] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
        if(post){
            navigate("/nutrition")
        }
    }, [post, navigate])


    const handleOnSubmit = async (event) =>{
        setError((state)=>({...state, form: null}))

        event.preventDefault();

        if(form.name == ""){
            setError((state)=>({...state, form: "No Name Provided"}))
            return;
        }

        if(form.category == ""){
            setError((state)=>({...state, form: "No Category Provided"}))
            return;
        }

        const {data, err} = await API.makeNutrition(
            {
                name: form.name,
                calories: form.calories,
                imageUrl: form.imageUrl,
                category: form.category,
                quantity: form.quantity
            })

            if(err) setError((state) => ({...state, form: err?.response?.data?.error?.message }))
            if (data){
                setForm({
                        name: "",
                        calories: 1,
                        imageUrl: "",
                        category: "",
                        quantity: 1
                    })
                    setPost(true)
            }
        }

        const handleOnInputChange = (event) => {
                setForm((state) => ({ ...state, [event.target.name]: event.target.value }))
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
