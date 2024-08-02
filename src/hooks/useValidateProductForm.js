import { useCallback, useState } from "react";

function isFile(file) {
    return file instanceof File;
}


const useValidateProductForm = () => {
    const [validationObj,setValidationObj] = useState();


    function getImageDimensions(file) {
        return new Promise((resolve,reject) => {
            const img = new Image();
            img.onload = () => resolve({width:img.width, height:img.height});
            img.onerror = () => reject( new Error("Failed to load image"));
            img.src = URL.createObjectURL(file);
        });
    }

    const handleValidation = useCallback(async (formData) =>{
        setValidationObj(null);
        let validations = {valid:true, response:{title:'',message:[]}};


        //checks for data validation, file type, file size, file dimensions, positive number for price 

        const file = (formData.get('imageFile'))

        if(isFile(file)) {
            if(!file.type.startsWith('image/')){
                validations.valid = false;
                validations.response.message.push('File is not an image\n');
            } else {
                const dimensions = await getImageDimensions(file);
                if(dimensions.width > 200 || dimensions.height > 200) {
                    validations.valid = false;
                    validations.response.message.push("File cannot be larger than 200x200\n");
                }
            }

            if(file.size > 20 * 1024 * 1024) {
                validations.valid = false;
                validations.response.message.push("File size cannot be larger than 20 MB\n");
            }
        }

        if(formData.get('price') <= 0) {
            validations.valid = false;
            validations.response.message.push("Price of product cannot be negative or zero\n");
        }

        //checks for empty fields

        if(formData.get('price') == 'undefined') {
            validations.valid = false;
            validations.response.message.push("Please enter a price\n");
        }

        if(formData.get('title') == 'undefined') {
            validations.valid = false;
            validations.response.message.push("Please enter a name\n");
        }

        if(formData.get('description') == 'undefined') {
            validations.valid = false;
            validations.response.message.push("Please enter a description\n");
        }
        
        if(!validations.valid) {
            validations.response.title = 'In valid data entered:\n';
        }
        setValidationObj(validations);
    }, [])

    return [validationObj,handleValidation];

}

export default useValidateProductForm;