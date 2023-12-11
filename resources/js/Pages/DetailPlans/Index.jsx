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
import useFormattedDate from "@/Hooks/useFormattedDate.js";

export default function Index({auth, detailplans, foodgroups, mealtimes, plans}) {
    const [modalShow, setModalShow] = useState(false);
    const [modalForm, setModalForm] = useState(false);
    const [detailPlan, setDetailPlan] = useState({});
    const [titulo, setTitulo] = useState('');
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroFecha, setFiltroFecha] = useState(null);

    const {data, setData, delete: destroy, post, patch, processing, reset, errors} = useForm({
        id: '',
        cantidad: '',
        descripcion: '',
        idGrupoComida: 0,
        idTiempoComida: 0,
        idPlan: 0,
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

    const filteredData = detailplans && detailplans.filter((item) => {
        console.log(item);
        return (
            (filtroNombre === '' || getNombre(item.plans).toLowerCase().includes(filtroNombre.toLowerCase().trim())) &&
            (!filtroFecha || item.plans.fecha === filtroFecha.toISOString().split('T')[0])
        );
    });

    const openShowModal = (detailplan) => {
        setModalShow(true);
        setDetailPlan(detailplan);
    }

    const closeShowModal = () => {
        setModalShow(false);

        setTimeout(() => {
            setDetailPlan({})
        }, 200);
    }

    const openFormModal = (titulo, detailPlan = {}) => {
        setModalForm(true);
        setTitulo(titulo);

        if (titulo === "Crear") {
            setData({
                id: '',
                cantidad: '',
                descripcion: '',
                idGrupoComida: 0,
                idTiempoComida: 0,
                idPlan: 0,
            });
        } else {
            setData({
                id: detailPlan.id,
                cantidad: detailPlan.cantidad,
                descripcion: detailPlan.descripcion,
                idGrupoComida: detailPlan.idGrupoComida,
                idTiempoComida: detailPlan.idTiempoComida,
                idPlan: detailPlan.idPlan,
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
            post(route('detailplans.store'), {
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
            patch(route('detailplans.update', data), {
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

    const onDelete = (detailPlan) => {
        destroy(route('detailplans.destroy', detailPlan), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Detalles</h2>}
        >
            <Head title="Detalles"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton
                        className='w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white'
                        title="Crear Detalle" onClick={() => openFormModal('Crear')}><FontAwesomeIcon
                        className="text-lg mr-2" icon={['far', 'square-plus']}/>Crear Detalle</PrimaryButton>
                </div>
            </div>

            {detailplans && detailplans.length > 0 ? (
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
                                    <th className='w-1/4 px-4 py-3 text-left'>Fecha</th>
                                    <th className='w-1/4 px-4 py-3 text-left'>Descripción</th>
                                    <th className='w-1/4 px-4 py-3 text-left'>Nombre</th>
                                    <th className='w-2/4 px-4 py-3 text-left'></th>
                                </tr>
                                </thead>
                                <tbody className='text-white'>
                                {filteredData.map((detailPlan, i) => (
                                    <tr key={detailPlan.id}>
                                        <td className='px-4 py-3'>{detailPlan.plans && useFormattedDate(detailPlan.plans.fecha)}</td>
                                        <td className='px-4 py-3'>{detailPlan.descripcion}</td>
                                        <td className='px-4 py-3'>{detailPlan.plans && detailPlan.plans.patients.nombre + " " + detailPlan.plans.patients.apellidos}</td>
                                        <td className='w-full px-4 py-3 inline-flex justify-end'>
                                            <PrimaryButton
                                                className='w-auto m-1 !bg-blue-500 focus:hover:bg-blue-600 hover:!bg-blue-600 dark:focus:hover:bg-blue-500 dark:hover:!bg-blue-500 dark:hover:text-white'
                                                onClick={() => openShowModal(detailPlan)}><FontAwesomeIcon className="text-lg"
                                                                                                           icon={['far', 'eye']}/></PrimaryButton>
                                            <PrimaryButton
                                                className='w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white'
                                                onClick={() => openFormModal('Editar', detailPlan)}><FontAwesomeIcon
                                                className="text-lg" icon={['far', 'pen-to-square']}/></PrimaryButton>
                                            <PrimaryButton
                                                className='w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white'
                                                onClick={() => onDelete(detailPlan)}><FontAwesomeIcon className="text-lg"
                                                                                                      icon={['far', 'trash-can']}/></PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ):(
                        <div className='grid v-screen place-items-center mt-4'>
                            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen detalles para la búsqueda</h2>
                        </div>
                    )}
                </>
            ) : (
                <div className='grid v-screen place-items-center mt-4'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen detalles</h2>
                </div>
            )}

            <Modal className='mostrar-info' show={modalShow} onClose={closeShowModal}>
                <div className='w-full p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>Paciente</h2>

                    <div className="info text-lg text-black dark:text-white">
                        <p>ID: {detailPlan.id}</p>
                        <p>Cantidad: {detailPlan.cantidad}</p>
                        <p>Descripción: {detailPlan.descripcion}</p>
                        <p>Grupo Alimenticio: {detailPlan.foodgroups && detailPlan.foodgroups.nombre}</p>
                        <p>Tiempo Alimenticio: {detailPlan.mealtimes && detailPlan.mealtimes.nombre}</p>
                        <p>Fecha: {detailPlan.plans && useFormattedDate(detailPlan.plans.fecha)}</p>
                        <p>Paciente: {detailPlan.plans && detailPlan.plans.patients.nombre + ' ' + detailPlan.plans.patients.apellidos}</p>
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
                        <div className='mt-6'>
                            <InputLabel htmlFor='cantidad' value='Cantidad'></InputLabel>
                            <TextInput id='cantidad' name='cantidad' className='mt-1 block w-full' required
                                       value={data.cantidad} onChange={(e) => handleChange(e)}></TextInput>
                        </div>
                        <div className='mt-6'>
                            <InputLabel htmlFor='descripcion' value='Descripción'></InputLabel>
                            <TextArea id='descripcion' name='descripcion'
                                      className='mt-1 block w-full whitespace-pre-wrap' required
                                      value={data.descripcion} onChange={(e) => handleChange(e)}></TextArea>
                        </div>
                        <div className='mt-6'>
                            <InputLabel htmlFor='idGrupoComida' value='Grupo alimenticio'></InputLabel>
                            <select required id="idGrupoComida" name="idGrupoComida"
                                    defaultValue={data && data.idGrupoComida ? data.idGrupoComida : ""}
                                    className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    onChange={(e) => handleChange(e)}>
                                <option value="" disabled hidden>Seleccione un grupo alimenticio</option>
                                {foodgroups && foodgroups.map((foodgroup, i) => (
                                    <option key={i} value={foodgroup.id}>{foodgroup.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mt-6'>
                            <InputLabel htmlFor='idTiempoComida' value='Tiempo de comida'></InputLabel>
                            <select required id="idTiempoComida" name="idTiempoComida"
                                    defaultValue={data && data.idTiempoComida ? data.idTiempoComida : ""}
                                    className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    onChange={(e) => handleChange(e)}>
                                <option value="" disabled hidden>Seleccione un tiempo alimenticio</option>
                                {mealtimes && mealtimes.map((mealtime, i) => (
                                    <option key={i} value={mealtime.id}>{mealtime.nombre}</option>
                                ))}
                            </select>
                        </div>

                        <div className='mt-6'>
                            <InputLabel htmlFor='idPlan' value='Plan alimenticio'></InputLabel>
                            <select required id="idPlan" name="idPlan"
                                    defaultValue={data && data.idPlan ? data.idPlan : ""}
                                    className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    onChange={(e) => handleChange(e)}>
                                <option value="" disabled hidden>Seleccione un plan</option>
                                {plans && plans.map((plan, i) => (
                                    <option key={i}
                                            value={plan.id}>{useFormattedDate(plan.fecha) + ' - ' + plan.patients.nombre + " " + plan.patients.apellidos}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mt-6'>
                            <PrimaryButton type="submit" className='mt-3 mr-2 w-fit'>Guardar</PrimaryButton>
                            <PrimaryButton type="button" className='mt-3 w-fit'
                                           onClick={() => closeFormModal()}>Cerrar</PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>

        </AuthenticatedLayout>
    )
}
