import React,{useState} from 'react';

const info = {
    name:'',
    job: '',
    pay: null
}

const Form = ({take_data}) => {
    const [person, setPerson] = useState(info);
    const handleChange=(e)=>{
        setPerson((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const hangleSubmit=(e)=>{
        e.preventDefault(); // 이동을 막아야하기 때문에 필요한 코드.
        // 리퀘스트를 하지 않고 데이터만 가져온다.
        // = action이 없다. 리퀘스트는 a 태그에서만 사용 가능하다.
        take_data(person);
    }
    return (
        <form onSubmit={hangleSubmit}>
            <label>
                이름:
                <input type='text' name='name' onChange={handleChange}/>
            </label>
            <label>
                직업:
                <input type='text' name='job' onChange={handleChange}/>
            </label>
            <label>
                급여:
                <input type='text' name='pay' onChange={handleChange}/>
            </label>
            <button>등록</button>
        </form>
    );
};

export default Form;