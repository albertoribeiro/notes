const List = (notes: any[] ) => {

  const _setForm = (node:any) => {
     
  }

  const _deleteNote = (id:string) => {

  }

  return (
    <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <ul>
          {notes.map(note => (
            <li key={note.id} className="border-b border-gray-600 p-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">{note.title}</h3>
                  <p className="text-sm">{note.content}</p>
                </div>
                <button onClick={() => _setForm({ ...note })} className="bg-blue-500 mr-3 px-3 text-white rounded">Update</button>
                <button onClick={() => _deleteNote(note.id)} className="bg-red-500 px-3 text-white rounded">X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default List