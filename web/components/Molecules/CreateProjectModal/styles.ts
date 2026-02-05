import styled from 'styled-components'

export const Backdrop = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 40,
})

export const Dialog = styled.div({
  width: '100%',
  position: 'relative',
  maxWidth: '480px',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.3), 0 4px 6px -4px rgba(15, 23, 42, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  zIndex: 50,
})

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Title = styled.h3({
  fontSize: '20px',
  fontWeight: 400,
})

export const CloseButton = styled.button({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: '1.3rem',
  lineHeight: 1,
  color: '#6b7280',
  padding: 0,
})

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const Body = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const Field = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const Label = styled.label({
  fontSize: '14px',
  fontWeight: 500,
  color: '#4b5563',
  marginBottom: '4px',
})

export const Input = styled.input({
  borderRadius: '4px',
  border: '1px solid #d1d5db',
  padding: '12px 8px',
  outline: 'none',
  '&:focus': {
    borderColor: '#111827',
    boxShadow: '0 0 0 1px #111827',
  },
})

export const TextArea = styled.textarea({
  borderRadius: '4px',
  border: '1px solid #d1d5db',
  padding: '12px 8px',
  outline: 'none',
  '&:focus': {
    borderColor: '#111827',
    boxShadow: '0 0 0 1px #111827',
  },
  fontFamily: 'inherit',
})

export const Select = styled.select({
  borderRadius: '0.5rem',
  border: '1px solid #d1d5db',
  padding: '0.5rem 0.75rem',
  fontSize: '0.9rem',
  outline: 'none',
  '&:focus': {
    borderColor: '#111827',
    boxShadow: '0 0 0 1px #111827',
  },
})

export const Footer = styled.div({
  display: 'flex',
  gap: '8px',
})

export const PrimaryButton = styled.button({
  border: 'none',
  borderRadius: '4px',
  padding: '12px 0px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: '#111827',
  color: '#f9fafb',
  '&:hover': {
    backgroundColor: '#020617',
  },
  width: '100%',
})

export const SecondaryButton = styled.button({
  borderRadius: '4px',
  border: '1px solid #d1d5db',
  padding: '8px 0px',
  fontSize: '14px',
  backgroundColor: '#ffffff',
  color: '#111827',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f9fafb',
  },
  width: '100%',
})
