import {Link, useNavigate} from "react-router-dom";

function Header() {
    /*Link Component 대신 사용할 수 있는 useNavigate hook.
    * 페이지를 이동할 수 있는 함수를 반환한다.
    * 공식 문서에의하면, data에 대한 response를 원하는 경우 'loader' or 'action' 에서 'redirect'를 사용하는 것이 useNavigate hook보다 낫다고 한다.
    * */
    const navigate = useNavigate();

    //click event function
    const onAboutClicked = () => {
        // NavigateFunction 으로 "about 페이지 이동"
        navigate("/about");
    }

    return (
        <h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <button onClick={onAboutClicked}>About</button>
                </li>
            </ul>
        </h1>
    );
}

export default Header;