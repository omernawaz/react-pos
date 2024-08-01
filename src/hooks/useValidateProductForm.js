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
        
        if(!validations.valid) {
            validations.response.title = 'In valid data entered:\n';
        }
        setValidationObj(validations);
    }, [])

    return [validationObj,handleValidation];

}

export default useValidateProductForm;