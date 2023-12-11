import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {useState} from 'react';
import Modal from "@/Components/Modal.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextArea from "@/Components/TextArea.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index({auth, interchanges, foodgroups}) {
    const [modalShow, setModalShow] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [interchange, setInterchange] = useState({});
    const [titulo, setTitulo] = useState('');

    const {data, setData, delete: destroy, post, patch, processing, reset, errors} = useForm({
        id: '',
        nombre: '',
        descripcion: '',
        idGrupoComida: 0
    })

    const openShowModal = (interchange) => {
        setModalShow(true);
        setInterchange(interchange);
    }

    const closeShowModal = () => {
        setModalShow(false);

        setTimeout(() => {
            setInterchange({})
        }, 200);
    }

    const openFormModal = (titulo, interchange = {}) => {
        setModalForm(true);
        setTitulo(titulo);

        if (titulo === "Crear") {
            setData({
                id: '',
                nombre: '',
                descripcion: '',
                idGrupoComida: 0
            });
        } else {
            setData({
                id: interchange.id,
                nombre: interchange.nombre,
                descripcion: interchange.descripcion,
                idGrupoComida: interchange.idGrupoComida,
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
            post(route('interchanges.store'), {
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
            patch(route('interchanges.update', data), {
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

    const onDelete = (interchange) => {
        destroy(route('interchanges.destroy', interchange), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tabla de intercambios</h2>}
        >
            <Head title="Tabla de intercambios"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton className='w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white' title="Crear Intercambio" onClick={() => openFormModal('Crear')}><FontAwesomeIcon className="text-lg mr-2" icon={['far', 'square-plus']} />Crear Intercambio</PrimaryButton>
                </div>
            </div>

            {interchanges && interchanges.length > 0 ? (
                <div className='mx-auto'>
                    <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                        <thead className='bg-gray-700 text-white'>
                        <tr>
                            <th className='w-1/4 px-4 py-3 text-left'>Nombre</th>
                            <th className='w-2/4 px-4 py-3 text-left'></th>
                        </tr>
                        </thead>
                        <tbody className='text-white'>
                        {interchanges.map((interchange, i) => (
                            <tr key={interchange.id}>
                                <td className='px-4 py-3'>{interchange.nombre}</td>
                                <td className='w-full px-4 py-3 inline-flex justify-end'>
                                    <PrimaryButton className='w-auto m-1 !bg-blue-500 focus:hover:bg-blue-600 hover:!bg-blue-600 dark:focus:hover:bg-blue-500 dark:hover:!bg-blue-500 dark:hover:text-white' title="Mostrar" onClick={() => openShowModal(interchange)}><FontAwesomeIcon className="text-lg" icon={['far', 'eye']} /></PrimaryButton>
                                    <PrimaryButton className='w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white' title="Editar" onClick={() => openFormModal('Editar', interchange)}><FontAwesomeIcon className="text-lg" icon={['far', 'pen-to-square']} /></PrimaryButton>
                                    <PrimaryButton className='w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white' title="Eliminar" onClick={() => onDelete(interchange.id)}><FontAwesomeIcon className="text-lg" icon={['far', 'trash-can']} /></PrimaryButton>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ):(
                <div className='grid v-screen place-items-center mt-4'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen intercambios</h2>
                </div>
            )}

            <Modal className='mostrar-info' show={modalShow} onClose={closeShowModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>Tabla de intercambios</h2>

                    <div className="info text-lg text-black dark:text-white">
                        <p>Nombre: {interchange.nombre}</p>
                        <p>Descripción: {interchange.descripcion}</p>
                        <p>Grupo alimenticio: {interchange.foodgroups && interchange.foodgroups.nombre}</p>
                    </div>

                    <div className='mt-5 mx-auto text-center'>
                        <SecondaryButton onClick={() => closeShowModal()}>Cerrar</SecondaryButton>
                    </div>
                </div>
            </Modal>

            <Modal className='formulario' show={modalForm} onClose={closeFormModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>{titulo}</h2>

                    <form className='p-4 grid grid-cols-1 gap-4 text-white' onSubmit={(e) => submitData(e)}>
                        <div className='mt-6 col-span-2'>
                            <InputLabel htmlFor='nombre' value='Nombre'></InputLabel>
                            <TextInput id='nombre' name='nombre' className='mt-1 block w-full' required value={data.nombre} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-6 col-span-2'>
                            <InputLabel htmlFor='descripcion' value='Descripcion'></InputLabel>
                            <TextArea id='descripcion' name='descripcion' className='mt-1 block w-full whitespace-pre-wrap' required value={data.descripcion} onChange={(e) => handleChange(e)}></TextArea>
                        </div>
                        <div className='mt-6 col-span-2'>
                            <InputLabel htmlFor='idGrupoComida' value='Grupo'></InputLabel>
                            <select required id="idGrupoComida" name="idGrupoComida" defaultValue={data && data.idGrupoComida ? data.idGrupoComida : ""} className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" onChange={(e) => handleChange(e)}>
                                <option value="" disabled hidden>Seleccione un grupo alimenticio</option>
                                {foodgroups && foodgroups.map((foodgroup, i) => (
                                    <option key={i} value={foodgroup.id}>{foodgroup.nombre}</option>
                                ))}
                            </select>
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
