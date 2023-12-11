import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import LinkButton from "@/Components/LinkButton.jsx";
import Form from "@/Pages/Plans/Form.jsx";

export default function Edit({ auth, plan, patients }) {

    const { data, setData, delete: destroy, post, patch, processing, reset, errors } = useForm({
        id: plan.id,
        fecha: plan.fecha,
        peso: plan.peso,
        grasa: plan.grasa,
        porcentajeGrasa: plan.porcentajeGrasa,
        agua: plan.agua,
        musculo:plan.musculo,
        grasaVisceral:plan.grasaVisceral,
        proteina: plan.proteina,
        minerales:plan.minerales,
        pecho: plan.pecho,
        cintura: plan.cintura,
        cadera:plan.cadera,
        idPaciente: plan.idPaciente
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const submitData = (e) => {
        e.preventDefault();

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

            <div className='grid v-screen place-items-center mt-4'>
                <div className="w-2/6 bg-gray-500/75 dark:bg-gray-700/75">
                    <Form titulo="Editar" data={data} patients={patients} submitData={(e) => submitData(e)} handleChange={(e) => handleChange(e)} ready={true}/>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
