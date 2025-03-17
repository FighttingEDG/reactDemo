import { useImperativeHandle } from "react";

// 子组件：暴露focus方法
// 需要父组件传ref和placeholder
function CustomInput({ ref, placeholder }) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        // 相当于()=>{ return {} }
        focus: () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    })
    );
    return <input ref={inputRef} placeholder={placeholder} />;
};
export default CustomInput;