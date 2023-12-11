import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {useState, useEffect} from 'react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import LinkButton from "@/Components/LinkButton.jsx";
import Form from "@/Pages/Plans/Form.jsx";
import FormDetail from "@/Pages/Plans/FormDetail.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Create({auth, patients, foodgroups, mealtimes}) {

    const [detalles, setDetalles] = useState([]);
    const [ready, setReady] = useState(false);

    console.log(foodgroups);
    console.log(mealtimes);

    useEffect(() => {
        updateReady();
        setData(prevState => ({...prevState, detalles}));
    }, [detalles]);

    const {data, setData, delete: destroy, post, patch, processing, reset, errors} = useForm({
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
        idPaciente: "",
        detalles: detalles
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleDetalles = (detalle) => {
        setDetalles(prevState => [...prevState, detalle]);
    }

    const handleDetalleDelete = (indice) => {
        setDetalles(detallesPrev => detallesPrev.filter((_, i) => i !== indice));
    };

    const updateReady = () => {
        if (detalles.length > 0) {
            setReady(true);
        } else {
            setReady(false);
        }
    }

    const buscarNombre = (array, id) => {
        const object = array.find(obj => obj.id === parseInt(id));
        return object ? object.nombre : '';
    };

    const submitData = (e) => {
        e.preventDefault();

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
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Planes</h2>}
        >
            <Head title="Planes"/>

            <div className='grid v-screen place-items-center mt-4'>
                <div className="mt-3 mb-3 flex justify-end">
                    <LinkButton className='w-auto m-1' href={route('plans.index')}>Regresar</LinkButton>
                </div>
            </div>

            <div className='grid v-screen place-items-center mt-4 px-4'>
                <div className="w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75">
                    <Form titulo="Crear" data={data} patients={patients} submitData={(e) => submitData(e)}
                          handleChange={(e) => handleChange(e)} ready={ready}/>
                </div>

                <div className="w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75">
                    <FormDetail foodgroups={foodgroups} mealtimes={mealtimes} handleDetalles={handleDetalles}/>
                </div>


                <div className='w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75 p-6'>
                    <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>Detalles del Plan</h2>

                    {detalles && detalles.length > 0 ? (
                        <div className='mx-auto'>
                            <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                                <thead className='bg-gray-700 text-white'>
                                <tr>
                                    <th className='w-auto px-4 py-3 text-left'>Cantidad</th>
                                    <th className='w-auto px-4 py-3 text-left'>Descripción</th>
                                    <th className='w-auto px-4 py-3 text-left'>Grupo</th>
                                    <th className='w-auto px-4 py-3 text-left'>Tiempo</th>
                                    <th className='w-auto px-4 py-3 text-left'></th>
                                </tr>
                                </thead>
                                <tbody className='text-white'>
                                {detalles.map((detalle, index) => (
                                    <tr key={index}>
                                        <td className='px-4 py-3'>{detalle.cantidad}</td>
                                        <td className='px-4 py-3'>{detalle.descripcion}</td>
                                        <td className='px-4 py-3'>{foodgroups.length && buscarNombre(foodgroups, detalle.idGrupoComida)}</td>
                                        <td className='px-4 py-3'>{mealtimes.length && buscarNombre(mealtimes, detalle.idTiempoComida)}</td>
                                        <td className='w-fit px-4 py-3 inline-flex justify-end'>
                                            <PrimaryButton
                                                className='w-auto m-1 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white'
                                                title="Eliminar"
                                                onClick={() => handleDetalleDelete(index)}><FontAwesomeIcon
                                                className="text-lg" icon={['far', 'trash-can']}/></PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='grid v-screen place-items-center mt-4'>
                            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>No existen detalles</h2>
                        </div>
                    )}
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
