import React, { useEffect, useState } from 'react';
import { IDataInterface } from './types';
import { FixedSizeList as List } from 'react-window';
import { checkArrayDataHandler, CheckFieldTypeHandler, checkObjectDataHandler } from './helpers';

function App() {
	const [data, setData] = useState<IDataInterface[] | null>(null);

	useEffect(() => {
		fetch('https://api.json-generator.com/templates/YfDjINErULeA/data', {
			headers: new Headers({
				'Authorization': 'Bearer 8zcjw338edzjhu4ljxudvvd4hi4m2ct2l2sg8lh1'
			}),
		}).then(response => response.json()).then(data => setData(data)).catch(error => console.error("This is the error: ", error));

		return () => setData(null);
	}, []);

/* 	console.log(data) */

  return (<div className='wrapper'>
	<header className='mainHeader'>
		<div className='logo'>
			<img src='./assets/images/logo.svg' alt='logo' />
		</div>
	</header>
	<main className='mainContent'>
		<section className='filtersSection'>
			<fieldset className='filterItemWrapper'>
				<div className='filterItem'>
					<input id='iinput' value={'This is input'} />
					<label htmlFor='iinput'>This is label for the filter item</label>
				</div>
			</fieldset>
			<fieldset className='filterControls'>
				<button type='submit'>Submit filters</button>
				<button type='reset'>Reset filters</button>
			</fieldset>
		</section>
		<section className='content'>
			{
				data ? (
					<List
						className="List"
						height={1000}
						itemCount={data.length}
						itemSize={750}
						width="100%"
					>
						{({ index, style }) => {
							return (
								<div className='contentItem' style={style} key={data[index].profile.location.lat}>
								{
										Object.keys(data[index]).map((itemField) => {
											if(typeof data[index][itemField] === 'string'){
												return CheckFieldTypeHandler(itemField, data[index]);
											}
											if(data[index][itemField] instanceof Array){
												return data[index][itemField].map((arrField: any) => checkArrayDataHandler(arrField))
											}
											if(data[index][itemField] instanceof Object){
												return Object.keys(data[index][itemField]).map((objectField: any) => {
													return checkObjectDataHandler(objectField, data[index][itemField]);
												})
											}
											if(data[index][itemField] instanceof Date){
												return (
													<div className='contentItemData' key={data[index][itemField]}>
														<fieldset className='contentItemRow'>
															<label htmlFor={itemField}>{itemField}:</label>
															<input id={itemField} type='date' value={data[index][itemField]} readOnly />
														</fieldset>
													</div>		
												)
											}
										})
									}								
								<div className='contentItemChangeForm'>
									<button>Change item</button>
									<button>Save changes</button>
									<button>Reset changes</button>
								</div>
								</div>
							  )
						}}
					</List>
				) : null
			}
		</section>
	</main>
</div>);
}

export default App;
