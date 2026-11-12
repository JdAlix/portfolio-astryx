export function Page({children, narrow = false}) {
  return <div className={narrow ? 'page page--narrow' : 'page'}>{children}</div>;
}
