import {useState} from 'react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Form({titulo, data, patients, submitData, handleChange, ready}) {

    return (
        <div className='w-full p-6'>
            <h2 className='text-2xl font-medium text-black dark:text-white mb-3'>{titulo}</h2>

            <form className='p-4 grid grid-cols-2 gap-4 text-white' onSubmit={(e) => submitData(e)}>
                <div className='mt-6'>
                    <InputLabel htmlFor='fecha' value='Fecha'></InputLabel>
                    <TextInput type="date" id='fecha' name='fecha' className='mt-1 block w-full' required
                               value={data.fecha} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='peso' value='Peso'></InputLabel>
                    <TextInput type="number" id='peso' name='peso' className='mt-1 block w-full' required
                               value={data.peso} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='grasa' value='Grasa'></InputLabel>
                    <TextInput type="number" id='grasa' name='grasa' className='mt-1 block w-full' required
                               value={data.grasa} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='porcentajeGrasa' value='Porcentaje de grasa'></InputLabel>
                    <TextInput type="number" id='porcentajeGrasa' name='porcentajeGrasa' className='mt-1 block w-full'
                               required value={data.porcentajeGrasa} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='agua' value='Agua'></InputLabel>
                    <TextInput type="number" id='agua' name='agua' className='mt-1 block w-full' required
                               value={data.agua} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='musculo' value='Musculo'></InputLabel>
                    <TextInput type="number" id='musculo' name='musculo'
                               className='mt-1 block w-full whitespace-pre-wrap' required value={data.musculo}
                               onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='grasaVisceral' value='Grasa Visceral'></InputLabel>
                    <TextInput type="number" id='grasaVisceral' name='grasaVisceral' className='mt-1 block w-full'
                               required value={data.grasaVisceral} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='proteina' value='Proteina'></InputLabel>
                    <TextInput type="number" id='proteina' name='proteina'
                               className='mt-1 block w-full whitespace-pre-wrap' required value={data.proteina}
                               onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='minerales' value='Minerales'></InputLabel>
                    <TextInput type="number" id='minerales' name='minerales' className='mt-1 block w-full' required
                               value={data.minerales} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='pecho' value='Pecho'></InputLabel>
                    <TextInput type="number" id='pecho' name='pecho' className='mt-1 block w-full whitespace-pre-wrap'
                               required value={data.pecho} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='cintura' value='Cintura'></InputLabel>
                    <TextInput type="number" id='cintura' name='cintura' className='mt-1 block w-full' required
                               value={data.cintura} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6'>
                    <InputLabel htmlFor='cadera' value='Cadera'></InputLabel>
                    <TextInput type="number" id='cadera' name='cadera' className='mt-1 block w-full' required
                               value={data.cadera} onChange={(e) => handleChange(e)}></TextInput>
                </div>
                <div className='mt-6 col-span-2'>
                    <InputLabel htmlFor='idPaciente' value='Paciente'></InputLabel>
                    <select required id="idPaciente" name="idPaciente" defaultValue={data && data.idPaciente ? data.idPaciente : ""}
                            className="mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            onChange={(e) => handleChange(e)}>
                        <option value="" disabled hidden>Seleccione un paciente</option>
                        {patients && patients.map((patient, i) => (
                            <option key={patient.id} value={patient.id}>{patient.cedula + " - " + patient.nombre + " " + patient.apellidos}</option>
                        ))}
                    </select>
                </div>
                <div className='mt-6 col-span-2'>
                    <PrimaryButton type="submit" className='mt-3 mr-2 w-fit' disabled={!ready}>{titulo}</PrimaryButton>
                </div>
            </form>
        </div>
    )
}
