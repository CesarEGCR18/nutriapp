const useFormattedDate = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' });
};

export default useFormattedDate;
