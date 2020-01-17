import './about.css';
import Link from 'next/link'

const Index = () => (
    <div className="about-box">
        <p>about page</p>
        <Link href="/about">关于</Link> <Link href="/index">首页</Link>
    </div>
)

export default Index