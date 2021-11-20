import Button from '../Button/Button';

export default function Navbar() {
  const tabs: string[] = ['Features', 'Pricing', 'Resources'];
  return (
    <div className='container mx-auto flex items-center justify-between py-14'>
      <div className='flex items-center'>
        <span className='font-sans text-4xl font-bold'>Shortly</span>
        <div className='flex ml-10 space-x-6'>
          {tabs.map((tab, index) => (
            <span
              className='text-neutral-light font-bold text-lg hover:text-primary-violet ease-in-out duration-300 transition cursor-pointer'
              key={`nav_tab_${index}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Button
          type='secondary'
          buttonText='Login'
          borderRadiusSize='full'
          onClick={() => {}}
        />
        <Button
          type='primary'
          buttonText='Sign up'
          borderRadiusSize='full'
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
