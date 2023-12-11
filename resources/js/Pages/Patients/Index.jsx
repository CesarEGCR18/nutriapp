import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextArea from "@/Components/TextArea.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Index({ auth, patients }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [patient, setPatient] = useState({});
    const [titulo, setTitulo] = useState('');
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroCedula, setFiltroCedula] = useState('');

    const { data, setData, delete: destroy, post, patch, processing, reset, errors } = useForm({
        id: '',
        cedula: '',
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        alergias: '',
        numeroPartos: '',
        actividadFisica: 0,
        ocupacion: '',
        medicamentos: '',
        consumoDrogas: 0,
        comentario: ''
    })

    const handleNombreChange = (e) => {
        setFiltroNombre(e.target.value);
    };

    const handleLimpiarNombre = () => {
        setFiltroNombre('');
    };

    const handleCedulaChange = (e) => {
        setFiltroCedula(e.target.value);
    };

    const handleLimpiarCedula = () => {
        setFiltroCedula('');
    };

    const quitarTildes = (texto) => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    const getNombre = (item) => {
        return item && quitarTildes(item.nombre) + " " + quitarTildes(item.apellidos);
    }

    const filteredData = patients && patients.filter((item) => {
        return (
            (filtroNombre === '' || getNombre(item).toLowerCase().includes(filtroNombre.toLowerCase().trim())) &&
            (filtroCedula === '' || item.cedula.toString().toLowerCase().includes(filtroCedula.toLowerCase().trim()))
        );
    });

    const openShowModal = (patient) => {
        setModalShow(true);
        setPatient(patient);
    }

    const closeShowModal = () => {
        setModalShow(false);

        setTimeout(() => {
            setPatient({})
        }, 200);
    }

    const openFormModal = (titulo, patient = {}) => {
        setModalForm(true);
        setTitulo(titulo);

        if(titulo === "Crear") {
            setData({
                id: '',
                cedula: '',
                nombre: '',
                apellidos: '',
                telefono: '',
                email: '',
                alergias: '',
                numeroPartos: '',
                actividadFisica: 0,
                ocupacion: '',
                medicamentos: '',
                consumoDrogas: 0,
                comentario: ''
            });
        } else {
            setData({
                id: patient.id,
                cedula: patient.cedula,
                nombre: patient.nombre,
                apellidos: patient.apellidos,
                telefono: patient.telefono,
                email: patient.email,
                alergias: patient.alergias,
                numeroPartos: patient.numeroPartos,
                actividadFisica: patient.actividadFisica,
                ocupacion: patient.ocupacion,
                medicamentos: patient.medicamentos,
                consumoDrogas: patient.consumoDrogas,
                comentario: patient.comentario
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
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

        if(titulo === "Crear") {
            post(route('patients.store'), {
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
            patch(route('patients.update', data), {
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

    const onDelete = (patient) => {
        destroy(route('patients.destroy', patient), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Pacientes</h2>}
        >
            <Head title="Pacientes"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton className='w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white' title="Crear Paciente" onClick={() => openFormModal('Crear')}><FontAwesomeIcon className="text-lg mr-2" icon={['far', 'square-plus']} />Crear Paciente</PrimaryButton>
                </div>
            </div>

            {patients && patients.length > 0 ? (
                <>
                    <div className='grid v-screen place-items-center mt-4'>
                        <div className="mt-3 mb-3 flex w-2/6 justify-center">
                            <InputLabel htmlFor='filtroNombre' value='Nombre' className="w-12 mr-4 flex content-center items-center"></InputLabel>
                            <TextInput
                                id="filtroNombre"
                                name="filtroNombre"
                                type="text"
                                className='block w-2/4'
                                value={filtroNombre}
                                onChange={handleNombreChange}
                            />
                            <PrimaryButton className="ml-4 w-auto" onClick={handleLimpiarNombre}><FontAwesomeIcon className="text-lg" icon={['fas', 'broom']} /></PrimaryButton>
                        </div>

                        <div className="mt-3 mb-3 flex w-2/6 justify-center">
                            <InputLabel htmlFor='filtroCedula' value='Cédula' className="w-12 mr-4 flex content-center items-center"></InputLabel>
                            <TextInput
                                id="filtroCedula"
                                name="filtroCedula"
                                type="number"
                                className='block w-2/4'
                                value={filtroCedula}
                                onChange={handleCedulaChange}
                            />
                            <PrimaryButton className="ml-4 w-auto" onClick={handleLimpiarCedula}><FontAwesomeIcon className="text-lg" icon={['fas', 'broom']} /></PrimaryButton>
                        </div>
                    </div>

                    {filteredData && filteredData.length > 0 ? (
                        <div className='mx-auto'>
                            <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                                <thead className='bg-gray-700 text-white'>
                                    <tr>
                                        <th className='w-1/4 px-4 py-3 text-left'>Cédula</th>
                                        <th className='w-1/4 px-4 py-3 text-left'>Nombre</th>
                                        <th className='w-2/4 px-4 py-3 text-left'></th>
                                    </tr>
                                </thead>
                                <tbody className='text-white'>
                                {patients.map((patient, i) => (
                                    <tr key={patient.id}>
                                        <td className='px-4 py-3'>{ patient.cedula }</td>
                                        <td className='px-4 py-3'>{ patient.nombre + " " + patient.apellidos }</td>
                                        <td className='w-full px-4 py-3 inline-flex justify-end'>
                                            <PrimaryButton className='w-auto m-1 !bg-blue-500 focus:hover:bg-blue-600 hover:!bg-blue-600 dark:focus:hover:bg-blue-500 dark:hover:!bg-blue-500 dark:hover:text-white' onClick={() => openShowModal(patient)}><FontAwesomeIcon className="text-lg" icon={['far', 'eye']} /></PrimaryButton>
                                            <PrimaryButton className='w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white' onClick={() => openFormModal('Editar', patient)}><FontAwesomeIcon className="text-lg" icon={['far', 'pen-to-square']} /></PrimaryButton>
                                            <PrimaryButton className='w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white' onClick={() => onDelete(patient)}><FontAwesomeIcon className="text-lg" icon={['far', 'trash-can']} /></PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ):(
                        <div className='grid v-screen place-items-center mt-4'>
                            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen pacientes para la búsqueda</h2>
                        </div>
                    )}
                </>
            ):(
                <div className='grid v-screen place-items-center mt-4'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen pacientes</h2>
                </div>
            )}

            <Modal className='mostrar-info' show={modalShow} onClose={closeShowModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>Paciente</h2>

                    <div className="info text-lg dark:text-white">
                        <p>Cédula: {patient.cedula}</p>
                        <p>Nombre: {patient.nombre}</p>
                        <p>Apellidos: {patient.apellidos}</p>
                        <p>Teléfono: {patient.telefono}</p>
                        <p>Correo: {patient.email}</p>
                        <p>Alergias: {patient.alergias}</p>
                        <p>Número de partos: {patient.numeroPartos}</p>
                        <p>Actividad Física: {patient.actividadFisica === 0 ? 'No' : "Sí"}</p>
                        <p>Ocupación: {patient.ocupacion}</p>
                        <p>Medicamentos: {patient.medicamentos}</p>
                        <p>Consumo de drogas: {patient.consumoDrogas === 0 ? 'No' : "Sí"}</p>
                        <p>Comentario: {patient.comentario}</p>
                    </div>

                    <div className='mt-5 mx-auto text-center'>
                        <SecondaryButton onClick={() => closeShowModal()}>Cerrar</SecondaryButton>
                    </div>
                </div>
            </Modal>

            <Modal className='formulario' show={modalForm} onClose={closeFormModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>{ titulo }</h2>

                    <form className='p-4 grid grid-cols-2 gap-4 dark:text-white' onSubmit={(e) => submitData(e)}>
                        <div className='mt-3'>
                            <InputLabel htmlFor='cedula' value='Cédula'></InputLabel>
                            <TextInput id='cedula' name='cedula' className='mt-1 block w-full' required value={data.cedula} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='nombre' value='Nombre'></InputLabel>
                            <TextInput id='nombre' name='nombre' className='mt-1 block w-full' required value={data.nombre} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='apellidos' value='Apellidos'></InputLabel>
                            <TextInput id='apellidos' name='apellidos' className='mt-1 block w-full' required value={data.apellidos} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='telefono' value='Teléfono'></InputLabel>
                            <TextInput id='telefono' name='telefono' className='mt-1 block w-full' required value={data.telefono} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='email' value='Correo'></InputLabel>
                            <TextInput id='email' name='email' className='mt-1 block w-full' required value={data.email} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='numeroPartos' value='Número de partos'></InputLabel>
                            <TextInput type='number' id='numeroPartos' name='numeroPartos' className='mt-1 block w-full' required value={data.numeroPartos} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3 col-span-2'>
                            <InputLabel htmlFor='alergias' value='Alergias'></InputLabel>
                            <TextArea id='alergias' name='alergias' className='mt-1 block w-full whitespace-pre-wrap' required value={data.alergias} onChange={(e) => handleChange(e)}></TextArea>
                        </div>
                        <div className='mt-3 col-span-2'>
                            <InputLabel htmlFor='ocupacion' value='Ocupación'></InputLabel>
                            <TextInput id='ocupacion' name='ocupacion' className='mt-1 block w-full' required value={data.ocupacion} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='actividadFisica' value='Actividad física'></InputLabel>
                            <TextInput type='radio' id='actividadFisicaOption1' name='actividadFisica' className='mt-2 inline-block rounded-full' required value='1' checked={ data.actividadFisica == 1 } onChange={(e) => handleChange(e)}></TextInput><span className='mt-1 ml-2 mr-3 inline-block align-text-top'>Sí</span>
                            <TextInput type='radio' id='actividadFisicaOption2' name='actividadFisica' className='mt-2 inline-block rounded-full' required value='0' checked={ data.actividadFisica == 0 } onChange={(e) => handleChange(e)}></TextInput><span className='mt-1 ml-2 inline-block align-text-top'>No</span>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='consumoDrogas' value='Consumo de drogas'></InputLabel>
                            <TextInput type='radio' id='consumoDrogasOption1' name='consumoDrogas' className='mt-2 inline-block rounded-full' required value='1' checked={ data.consumoDrogas == 1  } onChange={(e) => handleChange(e)}></TextInput><span className='mt-1 ml-2 mr-3 inline-block align-text-top'>Sí</span>
                            <TextInput type='radio' id='consumoDrogasOption2' name='consumoDrogas' className='mt-2 inline-block rounded-full' required value='0' checked={ data.consumoDrogas == 0 } onChange={(e) => handleChange(e)}></TextInput><span className='mt-1 ml-2 inline-block align-text-top'>No</span>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='medicamentos' value='Medicamentos'></InputLabel>
                            <TextArea id='medicamentos' name='medicamentos' className='mt-1 block w-full whitespace-pre-wrap' required value={data.medicamentos} onChange={(e) => handleChange(e)}></TextArea>
                        </div>
                        <div className='mt-3'>
                            <InputLabel htmlFor='comentario' value='Comentarios'></InputLabel>
                            <TextArea id='comentario' name='comentario' className='mt-1 block w-full whitespace-pre-wrap' required value={data.comentario} onChange={(e) => handleChange(e)}></TextArea>
                        </div>
                        <div className='mt-3 col-span-2'>
                            <PrimaryButton type="submit" className='mt-3 mr-2 w-fit' disabled={processing}>Guardar</PrimaryButton>
                            <PrimaryButton type="button" className='mt-3 w-fit' onClick={() => closeFormModal()}>Cerrar</PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>

        </AuthenticatedLayout>
    )
}
