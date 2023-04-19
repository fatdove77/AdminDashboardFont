import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

function AppBreadcrumbs() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    let name = snippet.charAt(0).toUpperCase() + snippet.slice(1);
    if (name === 'User') {
      name = 'Users';
    }

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{name}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
}

export default AppBreadcrumbs;