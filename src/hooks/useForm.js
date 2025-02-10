import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

        // Manejar cambios en los inputs
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value // Actualiza solo el campo que cambió
        })
    }

    return {
        formState,
        onInputChange,
    };
};


