export const validateForm = (dataMessage) => {

    const dataMessageErrors = {
        user_name: "",
        user_email: "",
        message: ""
    };

    const keys = Object.keys(dataMessage);
    const values = Object.values(dataMessage);
    values.forEach((value, index) => {
        if(!value.length) {
            dataMessageErrors[keys[index]] = "Error";
        }
    });

    return dataMessageErrors;

};