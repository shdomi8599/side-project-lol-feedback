import { useState } from "react";

const SignUpDefalut = ({ value, type, userDataHandeler, pwCheckHandler, pwCheck }) => {

    // valChange를 통해 데이터에 맞는 이벤트핸들러를 부여하는 코드
    //원래는 상위 컴포넌트에서 내려보냈으나 랜더링 문제가 일어나서 하위로 내렸음.... 무조건 상위가 좋은게 아니었나봄
    //깨달은점 : useState는 하층 기준에선 최대한 높게, 상층 기준에선 최대한 낮게해놔야 불필요한 상층 랜더링을 줄이고
    //적절한 위치에서 자식 컴포넌트로 데이터를 전달할 수 있음

    //valObj를 통해 defaultVal를 각자 설정하고 각 데이터이름에 맞는 값을 저장하는 코드
    const valObj = {
        id: '아이디',
        pw: '비밀번호',
        pwc: '비밀번호 확인',
        email: '이메일'
    }

    let defaultVal = valObj[value]

    const [inputVal, setInputVal] = useState('')

    const inputValHandler = (e) => {
        setInputVal(e.target.value)
        userDataHandeler(e)
        if (value === 'pw') {
            pwCheckHandler(e)
        }
    }
    //유효성 메세지 표시 추가
    //만들면서 느끼는건데 이 부분은 컴포넌트화 시키는 바람에 일이 더 복잡해진 느낌이다.
    //회원가입은 한 페이지안에서 구성하는게 좋을수도...? 
    let valid = {
        enterId: '',
        enterPw: '',
        matchPw: '',
        formatEmail: '',
        sameId: ''
    }

    if (value === 'id' && inputVal === '')
        valid = { ...valid, enterId: '아이디를 입력해주세요.' }

    if (value === 'id' && localStorage.getItem('userData') !== null &&
        JSON.parse(localStorage.getItem('userData')).filter(x => x.id === inputVal).length !== 0)
        valid = { ...valid, sameId: '같은 아이디가 존재합니다' }

    if (value === 'pw' && inputVal === '')
        valid = { ...valid, enterPw: '비밀번호를 입력해주세요.' }

    if (value === 'pwc' && inputVal !== pwCheck)
        valid = { ...valid, matchPw: '비밀번호가 서로 다릅니다.' }

    if (value === 'email' && inputVal.includes('@') !== true || value === 'email' && inputVal.includes('.') !== true)
        valid = { ...valid, formatEmail: '이메일 형식을 지켜주세요.' }

    return <div className="sign_up_content">
        <div className="sign_up_dafault">
            {defaultVal}
        </div>
        <div id="input_box">
            <input className="sign_up_input" type={type} name={value} value={inputVal}  autoComplete='off' onChange={inputValHandler} />
            <div id="validity_test_message">
                {valid.sameId}
                {valid.enterId}
                {valid.enterPw}
                {valid.matchPw}
                {valid.formatEmail}
            </div>
        </div>
    </div>
}

export default SignUpDefalut;   