import React from 'react'

interface PageContainerProps {
    children: React.ReactNode;
    className?:string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
    return <div className={'px-8 lg:px-6 ' + className}>{ children }</div>
}