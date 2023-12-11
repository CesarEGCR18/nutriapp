import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useRef } from 'react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import LinkButton from "@/Components/LinkButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useFormattedDate from "@/Hooks/useFormattedDate.js";
import ReactToPrint from 'react-to-print';

export default function Show({ auth, plan, foodgroups, mealtimes }) {

    const componentRef = useRef();

    const buscarNombre = (array, id) => {
        const object = array.find(obj => obj.id === parseInt(id));
        return object ? object.nombre : '';
    };

    const sortData = (data, column, secondaryColumn) => {
        const sortedData = [...data].sort((a, b) => {
            if (a[column] === b[column]) {
                return a[secondaryColumn] > b[secondaryColumn] ? 1 : -1;
            }
            return a[column] > b[column] ? 1 : -1;
        });
        return sortedData;
    };

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

            <div className='grid v-screen place-items-center mt-4' ref={componentRef}>
                    <h2 className='text-black dark:text-white text-3xl font-bold text-center mb-4 tracking-wide'>Plan Alimenticio</h2>

                    <div className="info text-lg text-black dark:text-white w-full md:w-2/6 text-center">
                        <p className="mt-1"><span className="font-bold">Paciente:</span> {plan.patients && plan.patients.nombre + " " + plan.patients.apellidos}</p>

                        <div className="mt-6 flex justify-center w-full text-left">
                            <div className="w-fit mx-6">
                                <p className="mt-1"><span className="font-bold">Fecha:</span> {useFormattedDate(plan.fecha)}</p>
                                <p className="mt-1"><span className="font-bold">Peso:</span> {plan.peso} Kg</p>
                                <p className="mt-1"><span className="font-bold">Grasa:</span> {plan.grasa} Kg</p>
                                <p className="mt-1"><span className="font-bold">Porcentaje de grasa:</span> {plan.porcentajeGrasa}%</p>
                                <p className="mt-1"><span className="font-bold">Agua:</span> {plan.agua} L</p>
                                <p className="mt-1"><span className="font-bold">Músculo:</span> {plan.musculo} Kg</p>
                            </div>
                            <div className="w-fit mx-6">
                                <p className="mt-1"><span className="font-bold">Grasa visceral:</span> {plan.grasaVisceral}%</p>
                                <p className="mt-1"><span className="font-bold">Proteína:</span> {plan.proteina}</p>
                                <p className="mt-1"><span className="font-bold">Minerales:</span> {plan.minerales}</p>
                                <p className="mt-1"><span className="font-bold">Pecho:</span> {plan.pecho} cm</p>
                                <p className="mt-1"><span className="font-bold">Cintura:</span> {plan.cintura} cm</p>
                                <p className="mt-1"><span className="font-bold">Cadera:</span> {plan.cadera} cm</p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center w-full text-left">
                            {plan.detail_plans && plan.detail_plans.length > 0 ? (
                                <div className='mx-auto'>
                                    <table className='table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4'>
                                        <thead className='bg-gray-700 text-white'>
                                        <tr>
                                            <th className='w-auto px-4 py-3 text-left'>Tiempo</th>
                                            <th className='w-auto px-4 py-3 text-left'>Grupo</th>
                                            <th className='w-auto px-4 py-3 text-left'>Cantidad</th>
                                            <th className='w-auto px-4 py-3 text-left'>Descripción</th>
                                        </tr>
                                        </thead>
                                        <tbody className='text-white'>
                                        {sortData(plan.detail_plans, 'idTiempoComida', 'idGrupoComida').map((detalle, index) => (
                                            <tr key={index}>
                                                <td className='px-4 py-3'>{mealtimes.length && buscarNombre(mealtimes, detalle.idTiempoComida)}</td>
                                                <td className='px-4 py-3'>{foodgroups.length && buscarNombre(foodgroups, detalle.idGrupoComida)}</td>
                                                <td className='px-4 py-3'>{detalle.cantidad}</td>
                                                <td className='px-4 py-3'>{detalle.descripcion}</td>
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
            </div>

            <div className='grid v-screen place-items-center mt-4'>
                <ReactToPrint
                    trigger={() => <PrimaryButton className='w-auto m-1'>Imprimir o Guardar como PDF</PrimaryButton>}
                    content={() => componentRef.current}
                />
            </div>
        </AuthenticatedLayout>
    )
}
