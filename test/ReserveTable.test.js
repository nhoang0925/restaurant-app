import { render, waitFor, fireEvent, screen } from "@testing-library/react"
import Reserve from "../components/ReserveTable";
import axios from 'axios'

jest.mock('axios')

const dummyReserveTables = []