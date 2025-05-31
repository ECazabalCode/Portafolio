function Tag({ text }) {
    return (
        <div className='bg-gray-100 py-1 rounded-full px-3'>
            <h5 className="font-semibold text-xs text-slate-900">{text}</h5>
        </div>
    )
}

export default Tag