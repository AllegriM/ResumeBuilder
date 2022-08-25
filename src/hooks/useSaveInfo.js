import { useReducer, useState } from "react";

export const useSaveDataInfo = ({selector, dispatch, handleClose, saveData}) => {

    const [image, setImage] = useState(null)
    const [data, setData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: null,
            info: null,
            city: null,
            country: null,
            startDate: null,
            endDate: null,
            description: null,
            image: null
        }
    );

    const handleImage = (e) => {
        // console.log(e.target.files[0])
        setImage(e.target.files[0])
    }


    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setData({ [name]: value })
    }

    const handleSubmit = () => {
        dispatch(saveData(data))
        console.log(selector)
        handleClose()
    }

    return {handleChangeName, handleSubmit, handleImage, image, data}
}