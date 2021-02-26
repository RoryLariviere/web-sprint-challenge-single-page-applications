import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters long'),
    size: yup.string().oneOf(['small', 'medium', 'large', 'extraLarge'], 'Size is required'),
    pepperoni: yup.boolean(),
    pepperoncini: yup.boolean(),
    extraCheese: yup.boolean(),
    spinnach: yup.boolean(),
    special: yup.string().max(250, 'maximum of 250 characters')
})

export default formSchema;