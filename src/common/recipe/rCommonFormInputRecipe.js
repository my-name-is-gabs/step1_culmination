const SLAMBOO_FORM_INPUT = [
  {
    component: 'CommonFormInputs',
    data: {
      saveAs: 'fullname',
    },
    directives: {
      type: 'text',
      id: 'fname',
      state: null,
      placeholder: 'Enter your fullname',
      required: true,
      readOnly: false,
    },
    display: {
      labelFor: 'fname',
      label: 'Fullname',
      error: 'Invalid format',
    },
  },
  {
    component: 'CommonFormInputs',
    data: {
      saveAs: 'nickname',
    },
    directives: {
      type: 'text',
      id: 'nname',
      state: null,
      placeholder: 'Enter your nickname',
      required: true,
      readOnly: false,
    },
    display: {
      labelFor: 'nname',
      label: 'Nickname',
      error: 'Invalid format',
    },
  },
  {
    component: 'CommonFormInputs',
    data: {
      saveAs: 'age',
    },
    directives: {
      type: 'number',
      id: 'age',
      state: null,
      placeholder: 'Enter your age',
      min: 12,
      max: 99,
      required: true,
      readOnly: false,
    },
    display: {
      labelFor: 'age',
      label: 'Age',
      error: 'Invalid format',
    },
  },
  {
    component: 'CommonFormInputs',
    data: {
      saveAs: 'email',
    },
    directives: {
      type: 'email',
      id: 'email',
      state: null,
      placeholder: 'Enter your email',
      required: true,
      readOnly: false,
    },
    display: {
      labelFor: 'email',
      label: 'Email',
      error: 'Invalid format',
    },
  },
]

export { SLAMBOO_FORM_INPUT }
