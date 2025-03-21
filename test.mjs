import { test } from 'node:test'
import assert from 'node:assert'
import http from 'node:http'
import { error } from 'node:console'



var url = 'http://localhost:8001'

postTest(url)

async function postTest(url){
    url += '/tickets'
    try{
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({                
                firstname: 'John',
                lastname: 'Doe',
                email: 'john.doe@example.com',
                gender: 'masc',
                subject: 'help',
                file_attached: '',
                about: 'Interested in the job opening.',
                phone_number: '123-456-7890'}),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        assert.strictEqual(response.status,201,`Expected 201 but returned ${response.status}`) 
        console.log('Good test!')
    }catch(e){
        console.error('Test failed!', e);
        throw new Error(e)
    }
  
}
