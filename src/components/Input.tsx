export function Input({onChangeXIcon, placeholder}: {
    placeholder: string;
    onChangeXIcon: () => void}){
    return(
        <div>
            <input placeholder={placeholder} type='text' className="px-4 py-4 border rounded m-2" onChange={onChangeXIcon}>
            </input>
        </div>
    )
}