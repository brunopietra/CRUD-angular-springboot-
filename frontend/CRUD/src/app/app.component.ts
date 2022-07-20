import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CRUD';

  modal = document.querySelector('.modal-container')
  tbody = document.querySelector('tbody')
  sNome = document.querySelector('#m-nome')
  sFuncao = document.querySelector('#m-funcao')
  sSalario = document.querySelector('#m-salario')
  btnSalvar = document.querySelector('#btnSalvar')
  btnCancel = document.querySelector('#btnCancel')

  itens: any
  id: number

  getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(this.itens))



  ngOnInit(): void {
    this.itens = this.getItensBD()
    // this.tbody.innerHTML = ''
    this.itens.forEach((item: any, index: number) => {
      this.insertItem(item, index)
    })
  }


  insertItem(item: any, index: number) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.funcao}</td>
      <td>R$ ${item.salario}</td>
      <td class="acao">
        <button (onclick)="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button (onclick)="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    this.tbody.appendChild(tr)
  }


  deleteItem(index: number) {
    this.itens.splice(index, 1)
    this.setItensBD()
    this.ngOnInit()
  }


  openModal(edit = false, index = 0) {
    let modal = this.modal
    let sNome = this.sNome
    let sFuncao = this.sFuncao
    let sSalario = this.sSalario
    let id = this.id
    let itens = this.itens

    modal.classList.add('active')


    if (edit) {
      sNome = itens[index].nome
      sFuncao = itens[index].funcao
      sSalario = itens[index].salario
      id = index
    } else {
      sNome = null
      sFuncao = null
      sSalario = null
    }
    
  }

  modalOnClickCancel(){
    this.modal.classList.remove('active')
  }

  modalOnClickSave(){
    let modal = this.modal
    let sNome = this.sNome
    let sFuncao = this.sFuncao
    let sSalario = this.sSalario
    let id = this.id
    let itens = this.itens

    if (sNome == null || sFuncao == null || sSalario == null) {
      return
    }
  
  
    if (id !== undefined) {
      itens[id].nome = sNome
      itens[id].funcao = sFuncao
      itens[id].salario = sSalario
    } else {
      itens.push({'nome': sNome, 'funcao': sFuncao, 'salario': sSalario})
    }
  
    this.setItensBD()
  
    modal.classList.remove('active')
    this.ngOnInit()
    id = undefined
  }
}
