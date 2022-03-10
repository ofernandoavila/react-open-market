import { ReactNode } from 'react';
import { AdminContent, AdminHeader, AdminSideMenu } from './Commom';
import '../styles/main.scss';

type AdminTemplateType = {
    children: ReactNode;
}

export function AdminTemplate(props: AdminTemplateType) {
    return (
        <div className="main-admin">
            <AdminHeader />
            <div className="content">
                <AdminSideMenu />
                <AdminContent>
                    { props.children }
                </AdminContent>
            </div>
        </div>
    );
}