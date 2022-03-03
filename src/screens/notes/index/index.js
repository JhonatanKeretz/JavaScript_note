import React, { Fragment, useState } from 'react';
import HeaderLogged from "../../../components/header_logged";
import NotesScreen from '../../../components/notes'


const Notes = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
  <Fragment>
      <HeaderLogged setIsOpen={setIsOpen}/>
    <NotesScreen setIsOpen={setIsOpen} isOpen={isOpen} />
  </Fragment>
);
}

export default Notes;