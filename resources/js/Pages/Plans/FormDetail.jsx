import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import TextArea from "@/Components/TextArea.jsx";

export default function FormDetail({foodgroups, mealtimes, handleDetalles}) {
    const [detalle, setDetalle] = useState({
        cantidad: '',
        descripcion: '',
        idTiempoComida: 0,
        idGrupoComida: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetalle(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(detalle);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleDetalles(detalle);

        setDetalle({
            cantidad: '',
            descripcion: '',
            idTiempoComida: 0,
            idGrupoComida: 0,
        });
    };

    return (
        <div className='w-full p-6'>
            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>Agregar detalle</h2>

            <form className='p-4 grid grid-cols-2 gap-4 text-white' onSubmit={(e) => handleSubmit(e)}>
                <div className='mt-6'>
                    <InputLabel htmlFor='cantidad' value='Cantidad'></InputLabel>
                    <TextInput id='cantidad' name='cantidad' className='mt-1 block w-full' required value={detalle.cantidad} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='descripcion' value='Descripción'></InputLabel>
                    <TextInput id='descripcion' name='descripcion' className='mt-1 block w-full' required value={detalle.descripcion} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='idGrupoComida' value='Grupo alimenticio'></InputLabel>
                    <select required id="idGrupoComida" name="idGrupoComida" value={detalle.idGrupoComida} className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" onChange={(e) => handleChange(e)}>
                        <option value="0" disabled hidden>Seleccione un grupo alimenticio</option>
                        {foodgroups && foodgroups.map((foodgroup, i) => (
                            <option key={i} value={foodgroup.id}>{foodgroup.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='idTiempoComida' value='Tiempo de comida'></InputLabel>
                    <select required id="idTiempoComida" name="idTiempoComida" value={detalle.idTiempoComida} className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" onChange={(e) => handleChange(e)}>
                        <option value="0" disabled hidden>Seleccione un tiempo alimenticio</option>
                        {mealtimes && mealtimes.map((mealtime, i) => (
                            <option key={i} value={mealtime.id}>{mealtime.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className='mt-6 col-span-2'>
                    <PrimaryButton type="submit" className='mt-3 mr-2 w-fit'>Agregar</PrimaryButton>
                </div>
            </form>
        </div>
    )
}
