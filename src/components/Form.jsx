const BASE_INPUT_CLASS = 'rounded text-sm border border-gray-200 shadow-xs p-2 outline-gray-400 outline-offset-4 bg-white'

export const TextField = ({ id, label, type = 'text', ...props }) => (
    <div className="flex flex-col gap-2 grow">
        <label className="text-sm font-medium" htmlFor={id}>{label}</label>
        <input type={type} id={id} className={BASE_INPUT_CLASS} {...props} />
    </div>
)

export const TextArea = ({ id, cols, rows, label, placeholder, props }) => (
    <div className="flex flex-col gap-2 grow">
        <label htmlFor={id} className="text-sm font-medium">{label}</label>
        <textarea id={id} className={BASE_INPUT_CLASS} {...props} rows={rows} cols={cols} placeholder={placeholder} />
    </div>
)