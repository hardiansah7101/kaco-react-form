import { useState } from 'react'

export const useForm = (
    payload = {},
    config = {
        dynamicObject: false,
    }
) => {
    const [data, setData] = useState(payload)

    const setPayload = (object, value) => {
        const tempData = { ...data }

        // is dynamic object ?
        if (config.dynamicObject == false && typeof tempData[object] == 'undefined') { return }

        tempData[object] = value
        setData(tempData)
    }

    const generateFormData = () => {
        const objects = Object.keys(data)
        const formData = new FormData()
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            formData.append(object, data[object])
        }
        return formData
    }

    const resetData = (newPayload = payload) => {
        setData(newPayload)
    }

    return {
        data: data,
        formSet: setPayload,
        formData: generateFormData,
        formReset: resetData,
    }
}

export default { useForm }