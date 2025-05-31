function TextArea(cols, rows, label, props) {
    return (
        <div>
            {label && <label htmlFor={props?.id} className="text-sm font-medium">{label}</label>}
            <textarea className="border border-gray-200 rounded shadow-xs" {...props} rows={rows} cols={cols}/>
        </div>
    )
}

export default TextArea