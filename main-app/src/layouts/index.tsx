import { IRouteComponentProps, Link } from "umi";

export default function ({ children }: IRouteComponentProps) {
    return <div>
        <div style={{width: '20%', float: 'left'}}>
            <ul>
                <ol><Link to="/">主站</Link></ol>
                <ol><Link to="/task/list">task</Link></ol>
                <ol><Link to="/portrait/category">portrait</Link></ol>
            </ul>
            
        </div>
        <div style={{float: 'right', width: '80%'}}>
            {children}
        </div>
    </div>;
}