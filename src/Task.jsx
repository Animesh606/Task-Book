const Task = (promp) => {
    return (
        <div className="list">
            <button onClick={() => promp.onClick(promp.id)}>x</button>
            <li>{promp.value}</li>
        </div>
    );
}

export default Task;