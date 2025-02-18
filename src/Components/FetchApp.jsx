import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    // Hook ya maneja la carga de datos
    const { data, isLoading, error } = useFetch(url);

    return (
        <>
            <h2>Lista de Usuarios: </h2>
            {isLoading ? (
                <h4>Cargando....</h4>
            ) : error ? (
                <h4>Ha ocurrido un error: {error}</h4>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No hay datos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </>
    );
};
