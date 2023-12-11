import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {useState} from 'react';
import Modal from "@/Components/Modal.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextArea from "@/Components/TextArea.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Index({auth, foodGroups}) {
    const [modalForm, setModalForm] = useState(false);
    const [foodGroup, setFoodGroup] = useState({});
    const [titulo, setTitulo] = useState('');

    console.log(foodGroups);

    const {data, setData, delete: destroy, post, patch, processing, reset, errors} = useForm({
        id: '',
        nombre: ''
    })

    const openFormModal = (titulo, foodGroup = {}) => {
        setModalForm(true);
        setTitulo(titulo);

        if (titulo === "Crear") {
            setData({
                id: '',
                nombre: ''
            });
        } else {
            setData({
                id: foodGroup.id,
                nombre: foodGroup.nombre
            });
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(data);
    }

    const closeFormModal = () => {
        setModalForm(false);
    }

    const submitData = (e) => {
        e.preventDefault();

        if (titulo === "Crear") {
            post(route('foodgroups.store'), {
                onSuccess: () => {
                    console.log("SUCCESS");
                    closeFormModal();
                },
                onError: () => {
                    console.log("ERROR");
                    console.log(errors);
                }
            })
        } else {
            patch(route('foodgroups.update', data), {
                onSuccess: () => {
                    console.log("SUCCESS");
                    closeFormModal();
                },
                onError: () => {
                    console.log("ERROR");
                    console.log(errors);
                }
            })
        }
    }

    const onDelete = (foodGroup) => {
        destroy(route('foodgroups.destroy', foodGroup), {
            onSuccess: () => {
                console.log("SUCCESS");
            },
            onError: () => {
                console.log("ERROR");
                console.log(errors);
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Grupos alimienticios</h2>}
        >
            <Head title="Grupos alimienticios"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton className='w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white' title="Crear Grupo" onClick={() => openFormModal('Crear')}><FontAwesomeIcon className="text-lg mr-2" icon={['far', 'square-plus']} />Crear Grupo</PrimaryButton>
                </div>
            </div>

            {foodGroups && foodGroups.length > 0 ? (
                <div className='mx-auto'>
                    <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                        <thead className='bg-gray-700 text-white'>
                        <tr>
                            <th className='w-1/4 px-4 py-3 text-left'>Nombre</th>
                            <th className='w-auto px-4 py-3 text-left'></th>
                        </tr>
                        </thead>
                        <tbody className='text-white'>
                        {foodGroups.map((foodGroup, i) => (
                            <tr key={foodGroup.id}>
                                <td className='px-4 py-3'>{foodGroup.nombre}</td>
                                <td className='w-full px-4 py-3 inline-flex justify-end'>
                                    <PrimaryButton className='w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white' title="Editar" onClick={() => openFormModal('Editar', foodGroup)}><FontAwesomeIcon className="text-lg" icon={['far', 'pen-to-square']} /></PrimaryButton>
                                    <PrimaryButton className='w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white' title="Eliminar" onClick={() => onDelete(foodGroup.id)} disabled={foodGroup.interchanges.length > 0 || foodGroup.detail_plans.length > 0}><FontAwesomeIcon className="text-lg" icon={['far', 'trash-can']} /></PrimaryButton>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ):(
            <div className='grid v-screen place-items-center mt-4'>
                <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen tiempos alimenticios</h2>
            </div>
            )}

            <Modal className='formulario' show={modalForm} onClose={closeFormModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>{titulo}</h2>

                    <form className='p-4 grid grid-cols-1 gap-4 text-white' onSubmit={(e) => submitData(e)}>
                        <div className='mt-6'>
                            <InputLabel htmlFor='nombre' value='Nombre'></InputLabel>
                            <TextInput id='nombre' name='nombre' className='mt-1 block w-full' required value={data.nombre} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-6 col-span-2'>
                            <PrimaryButton type="submit" className='mt-3 mr-2 w-fit' disabled={processing}>Guardar</PrimaryButton>
                            <PrimaryButton type="button" className='mt-3 w-fit' onClick={() => closeFormModal()}>Cerrar</PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>

        </AuthenticatedLayout>
    )
}
