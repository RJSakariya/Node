const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rjsakariya5@gmail.com',
        pass: 'acjrtefpnsxpdkpn'
    }
})

module.exports.sendOTP = (to, otp) => {
    const mailOption = {
        from: 'rjsakariya5@gmail.com',
        to: to,
        subject: 'password reset otp',
        text: `hi, your password reset otp is ${otp}`
    }
    transporter.sendMail(mailOption, (err) => err ? console.log(err) : console.log('send otp successfully...'))
}