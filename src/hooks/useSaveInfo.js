import { useReducer } from "react";

export const useSaveDataInfo = ({selector, dispatch, handleClose, createSectionResumeData, section , data}) => {

    const {title, info, city, image, country, startDate, endDate, description} = data;

    const [newData, setData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: title,
            info: info,
            city: city,
            country: country,
            startDate: startDate,
            endDate: endDate,
            description: description,
            image: image
        }
    );

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setData({ [name]: value })
    }

    const handleSubmit = () => {
        const id = `${newData.title + (+new Date())} `
        dispatch(createSectionResumeData({data: {...newData, id}, section: section}))
        console.log(selector)
        handleClose()
    }

    return {handleChangeName, handleSubmit, newData}
}