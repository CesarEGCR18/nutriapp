import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import LinkButton from "@/Components/LinkButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFormattedDate from "@/Hooks/useFormattedDate.js";

export default function Index({ auth, plans, patients, detailPlans }) {
    const [plan, setPlan] = useState({});
    const [titulo, setTitulo] = useState('');
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroFecha, setFiltroFecha] = useState(null);

    const { data, setData, delete: destroy, post, patch, processing, reset, errors } = useForm({
        id: '',
        fecha: '',
        peso: 0,
        grasa: 0,
        porcentajeGrasa: 0,
        agua: 0,
        musculo: 0,
        grasaVisceral: 0,
        proteina: 0,
        minerales: 0,
        pecho: 0,
        cintura: 0,
        cadera: 0,
        idPaciente: 0,
    })

    const handleNombreChange = (e) => {
        setFiltroNombre(e.target.value);
    };

    const handleFechaChange = (e) => {
        const fecha = e.target.value;
        setFiltroFecha(fecha ? new Date(fecha) : null);
    };

    const handleLimpiarNombre = () => {
        setFiltroNombre('');
    };

    const handleLimpiarFecha = () => {
        setFiltroFecha(null);
    };

    const quitarTildes = (texto) => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    const getNombre = (item) => {
        return item.patients && quitarTildes(item.patients.nombre) + " " + quitarTildes(item.patients.apellidos);
    }

    const filteredData = plans && plans.filter((item) => {
        return (
            (filtroNombre === '' || getNombre(item).toLowerCase().includes(filtroNombre.toLowerCase().trim())) &&
            (!filtroFecha || item.fecha === filtroFecha.toISOString().split('T')[0])
        );
    });

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
            post(route('plans.store'), {
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
            patch(route('plans.update', data), {
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

    const onDelete = (plan) => {
        destroy(route('plans.destroy', plan), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Planes</h2>}
        >
            <Head title="Planes"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <LinkButton className='w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white' title="Crear Plan Alimenticio" href={route('plans.create')}><FontAwesomeIcon className="text-lg mr-2" icon={['far', 'square-plus']} />Crear Plan Alimenticio</LinkButton>
                </div>
            </div>

            {plans && plans.length > 0 ? (
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
                            <InputLabel htmlFor='filtroFecha' value='Fecha' className="w-12 mr-4 flex content-center items-center"></InputLabel>
                            <TextInput
                                id="filtroFecha"
                                name="filtroFecha"
                                type="date"
                                className='block w-2/4'
                                value={filtroFecha ? filtroFecha.toISOString().split('T')[0] : ''}
                                onChange={handleFechaChange}
                            />
                            <PrimaryButton className="ml-4 w-auto" onClick={handleLimpiarFecha}><FontAwesomeIcon className="text-lg" icon={['fas', 'broom']} /></PrimaryButton>
                        </div>
                    </div>

                    {filteredData && filteredData.length > 0 ? (
                        <div className='mx-auto'>
                            <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                                <thead className='bg-gray-700 text-white'>
                                <tr>
                                    <th className='w-auto px-4 py-3 text-left'>Fecha</th>
                                    <th className='w-auto px-4 py-3 text-left'>Nombre del paciente</th>
                                    <th className='w-2/4 px-4 py-3 text-left'></th>
                                </tr>
                                </thead>
                                <tbody className='text-white'>
                                {filteredData.map((plan, i) => (
                                    <tr key={plan.id}>
                                        <td className='px-4 py-3'>{ useFormattedDate(plan.fecha) }</td>
                                        <td className='px-4 py-3'>{ plan.patients.nombre + " " + plan.patients.apellidos }</td>
                                        <td className='w-full px-4 py-3 inline-flex justify-end'>
                                            <LinkButton className='w-auto m-1 !bg-blue-500 focus:hover:bg-blue-600 hover:!bg-blue-600 dark:focus:hover:bg-blue-500 dark:hover:!bg-blue-500 dark:hover:text-white' title="Mostrar" href={route('plans.show', plan)}><FontAwesomeIcon className="text-lg" icon={['far', 'eye']} /></LinkButton>
                                            <LinkButton className='w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white' title="Editar" href={route('plans.edit', plan)}><FontAwesomeIcon className="text-lg" icon={['far', 'pen-to-square']} /></LinkButton>
                                            <PrimaryButton className='w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white' title="Eliminar" onClick={() => onDelete(plan)}><FontAwesomeIcon className="text-lg" icon={['far', 'trash-can']} /></PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ):(
                        <div className='grid v-screen place-items-center mt-4'>
                            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen planes alimenticios para la búsqueda</h2>
                        </div>
                    )}
                </>
            ):(
                <div className='grid v-screen place-items-center mt-4'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen planes alimenticios</h2>
                </div>
            )}

        </AuthenticatedLayout>
    )
}
