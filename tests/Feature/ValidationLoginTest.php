<?php

namespace Tests\Feature;

use Tests\TestCase;

class ValidationLoginTest extends TestCase
{
    public function test_wrong_email()
    {
        $response = $this->post('api/login', ['email' => 'oev2001@', 'password' => 'test123']);
        $response->assertStatus(422);
        $content = $response->getContent();
        $this->assertStringContainsString('email', $content);
        
    }

    public function test_wrong_password()
    {
        $response = $this->post('api/login', ['email' => 'test@email.com', 'password' => 'te']);
        $response->assertStatus(422);
        $content = $response->getContent();
        $this->assertStringContainsString('password', $content);
    }
}
