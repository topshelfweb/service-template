# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2023-04-02

### Added

- Endpoint for creating a new access-token  
`/token`
- Scoping  
You can add a scope to your request to expose various account or profile information.  
`/token?scope=id,email`
- Endpoint for renewing your access-token using a valid refresh-token  
`/token/renew`
- Documentation  
HTML-formatted documentation added  
`/docs`

[Unreleased]: https://github.com/topshelfweb/service-template/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/topshelfweb/service-template/releases/tag/v0.0.1