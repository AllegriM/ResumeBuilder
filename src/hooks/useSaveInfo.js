import { useReducer } from "react";

export const useSaveDataInfo = ({ selector, dispatch, handleClose, createSectionResumeData, section, data }) => {
    console.log(selector)
    const { title, info, city, image, country, startDate, endDate, description } = data;

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

    const saveToLocalStorageArraySection = (section, newData) => {
        const data = JSON.parse(localStorage.getItem(section)) || [];
        data.push(newData);
        localStorage.setItem(section, JSON.stringify(data));
    }

    const handleSubmit = () => {
        const id = `${newData.title + (+new Date())} `
        dispatch(createSectionResumeData({ data: { ...newData, id }, section: section }))
        saveToLocalStorageArraySection(section, { ...newData, id })
        handleClose()
    }


    return { handleChangeName, handleSubmit, newData }
}